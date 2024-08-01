import {Container} from "typedi";
import Logger from "./logger";

type DiProp = {
  name: string;
  model: any;
}[];

export default (props: DiProp) => {
  props.forEach(({ name, model }) => {
    Container.set(name, model);
  });

  Container.set("Logger", Logger);
};
