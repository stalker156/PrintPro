/**
 * Created by madina on 02.02.2017.
 */
var cartridgeRepo = require('../dataLayer/cartridgeRepo');

module.exports = [
    {
        name: 'getcartridges',
        callback: function (payload, done) {
            cartridgeRepo.getcartridges(function (err, data) {
                if (err) return done(err);
                done(null, data);
            });
        },
        allowAnonymous: false
    },
    {
        name: 'getcartridge',
        callback: function (payload, done) {
            cartridgeRepo.getOneById(payload.id, function (err, data) {
                if (err) return done(err);
                done(null, data);
            });
        },
        allowAnonymous: false
    },
    {
        name: 'addcartridge',
        callback: function (payload, done) {
            cartridgeRepo.add(payload, function (err, data) {
                if (err) return done(err);
                done(null, data);
            });
        },
        allowAnonymous: false
    },
    {
        name: 'updatecartridge',
        callback: function (payload, done) {
            cartridgeRepo.update(payload, function (err, data) {
            if (err) return done(err);
            done(null, data);
            });
        },
        allowAnonymous: false
    },
    {
        name: 'deletecartridge',
        callback: function (payload, done) {
            cartridgeRepo.delete(payload.id, function (err, data) {
                if (err) return done(err);
                done(null, data);
            });
        },
        allowAnonymous: false
    }, {
        name: 'searchcartridges',
        callback: function (payload, done) {
            cartridgeRepo.searchcartridges(payload, function (err, data) {
                if (err) return done(err);
                done(null, data);
            });
        },
        allowAnonymous: false
    }
];
