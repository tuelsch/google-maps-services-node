"use strict";

var googleKey = process.env.GOOGLE_KEY;

require("should"); // assertion framework extending Object.prototype

var googleWebServices = require("../src/index"),
    google = googleWebServices({ key: googleKey });

describe("distance matrix", function() {

    it("basic callback style", function(done) {

        google.distanceMatrix(["Konevova, Ziskov"], ["Parizska, Praha 1"], {}, function(err, results) {
            results.should.be.an.Object;
            results.should.have.a.property("rows");
            var rows = results.rows;
            rows.should.be.an.Array.and.have.a.lengthOf(1);
            done();
        });

    });

    it("promise style", function() {

        return google.distanceMatrix(["Konevova, Ziskov"], ["Parizska, Praha 1"], {})
        .then(function(results) {
            results.should.be.an.Object;
            results.should.have.a.property("rows");
            var rows = results.rows;
            rows.should.be.an.Array.and.have.a.lengthOf(1);
        });

    });

    it("basic callback style", function(done) {

        google.distanceMatrix(["Konevova, Ziskov", "Hlavni Nadrazi, Praha"], ["Parizska, Praha 1", "Jindrizska, Praha1"], {}, function(err, results) {
            results.should.be.an.Object;
            results.should.have.a.property("rows");
            var rows = results.rows;
            rows.should.be.an.Array.and.have.a.lengthOf(2);
            done();
        });

    });

});
