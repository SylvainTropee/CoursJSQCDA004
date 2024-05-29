var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Sport = /** @class */ (function () {
    function Sport(id, name, category) {
        if (category === void 0) { category = "collectif"; }
        this._id = id;
        this.name = name;
        this.category = category;
    }
    Sport.prototype.display = function () {
        return "".concat(this.name, " est un sport ").concat(this.category);
    };
    Object.defineProperty(Sport.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    return Sport;
}());
var climbing = new Sport(1, "Escalade", "individuel");
console.log(climbing.display());
var CarSport = /** @class */ (function (_super) {
    __extends(CarSport, _super);
    function CarSport(id, name, category, nbWheel) {
        var _this = _super.call(this, id, name, category) || this;
        _this.nbWheel = nbWheel;
        return _this;
    }
    /** Override */
    CarSport.prototype.display = function () {
        return _super.prototype.display.call(this) + " et a " + this.nbWheel + " roues";
    };
    CarSport.prototype.play = function (j1, j2) {
        return "".concat(j1, " est vainqueur et a comme score : ").concat(this.score);
    };
    return CarSport;
}(Sport));
var karting = new CarSport(2, "Karting", "individuel", 4);
console.log(karting.display());
karting.score = 10;
console.log(karting.play("Michel", "Regis"));
var playBattle = function (j1, j2) {
    return "".concat(j2, " est le vainqueur");
};
console.log(playBattle("Michel", "J-P"));
