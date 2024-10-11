import { AllowNull, BelongsTo, Column, DataType, Default, ForeignKey, IsEmail, Model, PrimaryKey, Table, Unique } from "sequelize-typescript";
import { Gender } from "../interfaces/user.interface";


@Table({
    tableName: "user",
    modelName: "UserModel",
    underscored: true,
    freezeTableName: true
})
export class UserModel extends Model<UserModel> {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string;

    @AllowNull(false)
    @Column
    firstName: string;

    @AllowNull(false)
    @Column
    lastName: string;

    @IsEmail
    @Unique
    @AllowNull(false)
    @Column
    email: string;

    @Unique
    @AllowNull(false)
    @Column
    phoneNumber: string;

    @Column(DataType.ENUM(Gender.MALE, Gender.FEMALE))
    gender: Gender;
}
