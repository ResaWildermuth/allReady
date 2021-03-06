﻿///<reference path="../lib/jquery/dist/jquery.js" />
///<reference path="../lib/knockout/dist/knockout.js" />

(function (ko, $, campaigns) {
    function Campaign(item) {
        for (var prop in item) {
            this[prop] = item[prop];
        }
        this.displayDate = function () {
            var start = this.StartDate.split('T')[0];
            var end = this.EndDate.split('T')[0];
            return start + ' : ' + end;
        }
        return this;
    }
    function TenantViewModel(campaigns) {
        var list = campaigns.map(function (item) { return new Campaign(item); })

        this.campaigns = ko.observableArray(list).filterBeforeDate("EndDate").textFilter(["Name", "Description"]);
        this.total = campaigns.length;
    }

    ko.applyBindings(new TenantViewModel(campaigns));
})(ko, $, modelCampaigns);