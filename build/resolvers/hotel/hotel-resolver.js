"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelResolver = void 0;
const type_graphql_1 = require("type-graphql");
const hotel_entity_1 = require("../../entities/hotel-entity");
const hotel_arguments_1 = require("./hotel-arguments");
let HotelResolver = class HotelResolver {
    async hotels() {
        return await hotel_entity_1.HotelModel.find({});
    }
    async hotel(_id) {
        return await hotel_entity_1.HotelModel.findById(_id);
    }
    async createHotel(data) {
        const newUser = new hotel_entity_1.HotelModel(data);
        await newUser.save();
        return newUser;
    }
    // @Authorized([UserRoles.ADMIN, UserRoles.SUPER_ADMIN])
    async deleteHotel(_id) {
        return await hotel_entity_1.HotelModel.findByIdAndRemove(_id);
    }
    async editHotel(_id, data) {
        return await hotel_entity_1.HotelModel.findByIdAndUpdate(_id, data, { new: true });
    }
};
__decorate([
    (0, type_graphql_1.Query)(returns => [hotel_entity_1.Hotel]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HotelResolver.prototype, "hotels", null);
__decorate([
    (0, type_graphql_1.Query)(returns => hotel_entity_1.Hotel),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HotelResolver.prototype, "hotel", null);
__decorate([
    (0, type_graphql_1.Mutation)(returns => hotel_entity_1.Hotel),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [hotel_arguments_1.BaseHotelInput]),
    __metadata("design:returntype", Promise)
], HotelResolver.prototype, "createHotel", null);
__decorate([
    (0, type_graphql_1.Mutation)(returns => hotel_entity_1.Hotel),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HotelResolver.prototype, "deleteHotel", null);
__decorate([
    (0, type_graphql_1.Mutation)(returns => hotel_entity_1.Hotel),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __param(1, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, hotel_arguments_1.HotelInput]),
    __metadata("design:returntype", Promise)
], HotelResolver.prototype, "editHotel", null);
HotelResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], HotelResolver);
exports.HotelResolver = HotelResolver;
