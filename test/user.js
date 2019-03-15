/* global describe it */
var sinon = require('sinon')
var assert = require('assert')
var user = require('../app/user.js')
var Database = require('../app/database')
var Government = require('../app/government')
describe('User Tests', function () {
    it('should call save once', function () {
        var save = sinon.spy(Database, 'save')
        12
        user.setupNewUser({ name: 'test' }, function () { })
        save.restore()
        sinon.assert.calledOnce(save)
    })
    it('should return custom tax base value', function () {
        var government = sinon.stub(Government, 'taxBase').returns(20)
        var tax = user.taxCalculation({ age: 10 })
        assert.equal(tax, 200)
        government.restore()
        sinon.assert.calledOnce(government)
    })
})