import { Inject, Service } from "typedi";
import { Logger } from "winston";

@Service()
export default class ProductService {
  constructor(
    @Inject("ProductModel") private productModel: Models.ProductModel,
    @Inject("Logger") private logger: Logger
  ) {}

  public addProduct(
    name: string,
    price: number,
    addedBy: string,
    productUrl: string
  ) {
    this.logger.sunVai("proeduct added");
  }
}
