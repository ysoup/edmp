/**
 * Created with JetBrains WebStorm.
 * User: Jack
 * Date: 14-4-17
 * Time: 下午4:37
 * To change this template use File | Settings | File Templates.
 */

var DaoBase = require('./DaoBase'),
    models = require('./../models'),
    Title = models.Title;

var TitleDao = new DaoBase(Title);
module.exports = TitleDao;