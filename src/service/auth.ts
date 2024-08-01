import { IUser } from "@/interfaces/IUser";

import jwt from "jsonwebtoken";
import { Inject, Service } from "typedi";
import { Logger } from "winston";

@Service()
export default class Authservices {
  constructor(
    @Inject("UserModel") private userModel: Models.UserModel,
    @Inject("Logger") private logger: Logger
  ) {}

  public async register(email: string, password: string) {
    //body bata email password aaucha teslai hami ley data base ma launey ani insert gareny
    try {
      console.log("try vitra ta aayo hai ta");
      console.log(email, password);
      if (email != null && password != null) {
        console.log(this.userModel.find());
        const user = await this.userModel.create({
          email: email,
          password: password,
        });
      }
    } catch (error) {
      throw error;
    }
  }

  public async login(email: string, password: string) {
    if (this.userModel) {
      this.logger.hagdeyaVai("userModel is not empty");
    }
    // email ley user khojcha database  ma yedi cha vanney password check garcha chaina vanney user not found ko message jancha
    const userRecord = await this.userModel.findOne({ email });

    if (userRecord) {
      if (userRecord.password == password && userRecord.email == email) {
        const user = userRecord.toObject();

        Reflect.deleteProperty(user, "password");

        const token = this.generateToken(user);
        this.logger.sunVai(token);
        return token;
      } else {
        const error = new Error("Email and password dosn't match");
        error["status"] = 401;
        throw error;
      }
    } else {
      const error = new Error("User not Found");
      error["status"] = 404;
      throw error;
    }
  }

  public debuging() {
    this.logger.sunVai("form the auth service logging the service ");
  }

  generateToken(user: IUser) {
    return jwt.sign(user, "summarClass", { expiresIn: "1h" });
  }
}
