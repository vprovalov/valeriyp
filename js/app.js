var itemsList = [];

var currentLocation = {
    latitude: 0,
    longitude: 0,
    radius: 0
}

var decideMode = true;

if (localStorage['itemsList']) {
    itemsList = JSON.parse(localStorage['itemsList']);
    for (var i = itemsList.length - 1; i >= 0; i--) {
        if (itemsList[i].date) {
            itemsList[i].date = new Date(itemsList[i].date);
        }
    }
}

ModesEnum = {
    PlanTab: 0,
    ShopTab: 1
};

var mode = ModesEnum.PlanTab;
var storeName = undefined;
var dropboxClient;
var datastoreManager;
var dropboxItemsListTable;

function ToRadians(degrees)
{
    return Math.PI / 180.0 * degrees;
}

function DistanceInKm(lat1, lon1, lat2, lon2) {
    var rlat1 = ToRadians(lat1);
    var rlon1 = ToRadians(lon1);
    var rlat2 = ToRadians(lat2);
    var rlon2 = ToRadians(lon2);

    var deltaLon = rlon2 - rlon1;
    var deltaLat = rlat2 - rlat1;

    var sinDeltaLat = Math.sin(deltaLat / 2.0);
    var sinDeltaLon = Math.sin(deltaLon / 2.0);

    var a =
        sinDeltaLat * sinDeltaLat +
        Math.cos(rlat1) *
        Math.cos(rlat2) *
        sinDeltaLon * sinDeltaLon;

    var c = 2.0 * Math.atan2(Math.sqrt(a), Math.sqrt(1.0 - a));

    return 6378.135 * c;
}

function FindNearestStore() {
    var name = undefined;

    if (currentLocation) {
        var nearestDistance = Number.MAX_VALUE;

        for (var i = 0; i < stores.length; ++i) {
            var distance = 1000.0 * DistanceInKm(currentLocation.latitude, currentLocation.longitude, stores[i].latitude, stores[i].longitude);

            if (distance < stores[i].radius + currentLocation.radius) {
                if (nearestDistance > distance) {
                    name = stores[i].name;
                    nearestDistance = distance;
                }
            }
        }

        if (nearestDistance > 50) {
            name = undefined;
        }
    }

    return name;
}

function PlanUi() {
    $("#headerBar").show();
    $(".content").append("<ul class=\"table-view\"></ul>");

    var list = $(".content .table-view");
    var anyDoneItems = false;
    for (var idx = 0; idx < itemsList.length; ++idx) {
        var item = itemsList[idx];
        if (!item.done) {
            list.append("<li itemIdx=\"" + idx + "\" class=\"table-view-cell\"><span style=\"padding-left:10px\">" + item.text + "</span></li>");
        }
    }

    $("#addItem").show();
    $("#editItems").show();
}

function AddItem(itemText) {
    itemsList.push({ text: itemText, done: false, addedLocation: currentLocation });
    localStorage['itemsList'] = JSON.stringify(itemsList);
}

function synchronizeWithDropBox() {
    var allRecords = dropboxItemsListTable.query({});
    for (var idx = 0; idx < allRecords.length; ++idx) {
        dropboxItemsListTable.get(allRecords[idx].getId()).deleteRecord();
    }

    for (var idx = 0; idx < itemsList.length; ++idx)
    {
        var item = itemsList[idx];

        var dropboxRecord = {
            text: item.text
        };

        if (item.done)
        {
            dropboxRecord.done = item.done;
        }

        if (item.date)
        {
            dropboxRecord.date = item.date;
        }

        if (item.addedLocation) {
            dropboxRecord.addedLocationLatitude = item.addedLocation.latitude;
            dropboxRecord.addedLocationLongitude = item.addedLocation.longitude;
        }

        if (item.doneLocation) {
            dropboxRecord.doneLocationLatitude = item.doneLocation.latitude;
            dropboxRecord.doneLocationLongitude = item.doneLocation.longitude;
        }

        dropboxItemsListTable.insert(dropboxRecord).getId();
    }
}

function CheckItem(itemIdx, done) {
    var item = itemsList[itemIdx];

    item.done = done;
    if (done) {
        if (!item.date) {
            item.date = new Date();
            item.doneLocation = currentLocation;
        }
    } else {
        delete item.date;
    }

    localStorage['itemsList'] = JSON.stringify(itemsList);
}

function supports_geolocation() {
    return 'geolocation' in navigator;
}

function ShopUi() {
    if (storeName) {
        $("header h1").text("In: " + storeName);
    } else {
        $("header h1").text("Grocery List");
    }

    $(".content").append("<ul class=\"table-view\"></ul>");
    var list = $(".content .table-view");
    var anyDoneItems = false;
    for (var idx = 0; idx < itemsList.length; ++idx) {
        var item = itemsList[idx];
        if (!item.done) {
            list.append("<li itemIdx=\"" + idx + "\" class=\"table-view-cell\"><input type=\"checkbox\"/><span style=\"padding-left:10px\">" + item.text + "</span></li>");
        } else {
            anyDoneItems = true;
        }
    }

    if (anyDoneItems) {
        var doneItems = {};

        for (var idx = 0; idx < itemsList.length; ++idx) {
            var item = itemsList[idx];

            if (item.done) {
                var doneItem = doneItems[item.text];
                if (!doneItem || !doneItem.date || doneItem.date.getTime() < item.date.getTime()) {
                    doneItems[item.text] = idx;
                }
            }
        }

        var indecies = [];
        for (var itemText in doneItems) {
            indecies.push(doneItems[itemText]);
        }

        indecies.sort(function(a, b) {
           return itemsList[b].date.getTime() - itemsList[a].date.getTime();
        });

        list.append("<li id=\"table-divider\" class=\"table-view-cell table-view-divider\">Done</li>");
        for (var i = 0; i < indecies.length; ++i) {
            var idx = indecies[i];
            var item = itemsList[idx];

            if (item.done) {
                var text = item.text;

                if (item.date) {
                    var seconds = Math.floor(((new Date()).getTime() - item.date.getTime()) / 1000);
                    var minutes = Math.floor(seconds / 60);
                    var hours = Math.floor(minutes / 60);
                    var days = Math.floor(hours / 24);

                    if (days > 0) {
                        text += " (" + days + "day" + (days == 1 ? "" : "s") + ")";
                    } else if (hours > 0) {
                        text += " (" + hours + "hr" + (hours == 1 ? "" : "s") + ")";
                    } else if (minutes > 0) {
                        text += " (" + minutes + "min" + (minutes == 1 ? "" : "s") + ")";
                    } else {
                        text += " (now)";
                    }
                }

                list.append("<li itemIdx=\"" + idx + "\" class=\"table-view-cell\">" +
                    (days + hours == 0 ? "<input type=\"checkbox\" checked=\"checked\"/>" : "")
                    + "<span style=\"padding-left:10px\">" + text + "</span></li>");
            }
        }
    }

    $(".content .table-view li input").click(function () {
        var itemIdx = $(this).parent().attr("itemIdx");
        CheckItem(itemIdx, this.checked);
        UpdateUi();
    });

    $("#addItem").hide();
    $("#editItems").hide();
}

function UpdateCoordinates(lat, lng, radius) {
    currentLocation.latitude = lat;
    currentLocation.longitude = lng;
    currentLocation.radius = radius;

    if (decideMode) {
        decideMode = false;
        storeName = FindNearestStore();

        if (storeName) {
            mode = ModesEnum.ShopTab;
            UpdateUi();
        }
    }
}

function UpdateUi() {
    navigator.geolocation.getCurrentPosition(function (location) {
        if (location.coords.accuracy < 100) {
            UpdateCoordinates(location.coords.latitude, location.coords.longitude, location.coords.accuracy);
        }
    });

    $(".content").empty();

    if (mode == ModesEnum.PlanTab) {
        $("#PlanTab").addClass("active");
        $("#ShopTab").removeClass("active");
        PlanUi();
    } else if (mode == ModesEnum.ShopTab) {
        $("#PlanTab").removeClass("active");
        $("#ShopTab").addClass("active");
        ShopUi();
    }
}

function initDropboxDatastoreManager() {
    datastoreManager = dropboxClient.getDatastoreManager();
    datastoreManager.openDefaultDatastore(function (error, datastore) {
        if (error) {
            alert('Error opening default datastore: ' + error);
        }

        dropboxItemsListTable = datastore.getTable('itemsList');
    });
}

function NewItemAddEnded() {
    var itemText = $("#newItemEdit").val();
    $("#newItemEdit").remove();

    if (itemText) {
        itemText = itemText.charAt(0).toUpperCase() + itemText.slice(1);
        AddItem(itemText);
        UpdateUi();
    }
}

$(document).ready(function () {
    $("#authWithDropbox").click(function() {
        dropboxClient.authenticate();
        if (dropboxClient.isAuthenticated())
        {
            initDropboxDatastoreManager();
        }
    });

    $("#syncWithDropbox").click(function() {
        synchronizeWithDropBox();
    });

    dropboxClient = new Dropbox.Client({key: "4x85xeyom9b4lrp"});

    // Try to finish OAuth authorization.
    dropboxClient.authenticate({interactive: false}, function (error) {
        if (error) {
            alert('Authentication error: ' + error);
        }
    });

    if (dropboxClient.isAuthenticated()) {
        initDropboxDatastoreManager();

        $("#syncWithDropbox").show();
        $("#authWithDropbox").hide();
    } else {
        $("#syncWithDropbox").hide();
        $("#authWithDropbox").show();
    }

    $("#addItem").click(function () {
        $(".content .table-view").prepend("<input id=\"newItemEdit\"type=\"text\" placeholder=\"new item\" autocomplete=\"off\" spellcheck=\"false\"/>");

        $(":input").autocomplete({
            lookup: groceries,
            triggerSelectOnValidInput: false,
            lookupFilter: function (suggestion, query, queryLowerCase) {
                var idx = suggestion.value.toLowerCase().indexOf(queryLowerCase);
                return idx !== -1 && (idx == 0 || suggestion.value[idx - 1] === ' ');
            },
            onSelect: function (suggestion) {
                $(":input").focus();
            }
        });

        $(':input').keypress(function (e) {
            if (e.which == 13) {
                NewItemAddEnded();
            }
        });

        $(":input").blur(function () {
            if ($(".autocomplete-suggestions:visible").length == 0) {
                NewItemAddEnded();
            }
        });
        $("#newItemEdit").focus();
    });

    $("#editItems").click(function () {
        $("#editItems").hide();
        $("#addItem").hide();
        $("#doneEditItems").show();
        $(".table-view .table-view-cell").not('.table-view-divider').append("<button class=\"btn btn-negative btn-remove\">Remove</button>");
        $(".btn-remove").click(function () {
            if ($(this).hasClass("btn-negative")) {
                $(this).parent().css("text-decoration", "line-through");
                $(this).text("Cancel");
                $(this).removeClass("btn-negative");
                $(this).addClass("btn-primary");
            } else {
                $(this).parent().css("text-decoration", "");
                $(this).text("Remove");
                $(this).removeClass("btn-primary");
                $(this).addClass("btn-negative");
            }
        });
    });

    $("#doneEditItems").click(function () {
        $(".table-view .table-view-cell").filter(function () {
            return $(this).css('text-decoration').indexOf("line-through") != -1;
        }).each(function () {
            var idx = parseInt($(this).attr("itemIdx"));
            delete itemsList[idx];
        })

        itemsList = jQuery.grep(itemsList, function (item) {
            return item !== undefined;
        });
        localStorage['itemsList'] = JSON.stringify(itemsList);

        $("#doneEditItems").hide();
        $("#editItems").show();
        $("#addItem").show();
        UpdateUi();
    });

    $(".tab-item").click(function () {
        mode = ModesEnum[$(this)[0].id];
        UpdateUi();
    });

    UpdateUi();
});