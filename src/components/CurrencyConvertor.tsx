
import { FunctionComponent } from "react";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
interface Props {}

const CurrencyConvertor: FunctionComponent<Props> = () => {
  return (
    <>
    <div className="currency-wrapper">
      <Input className="w-[60%] inline" />
      <Select>
        <SelectTrigger className="w-[100px]">
          <SelectValue placeholder="USD" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>USD</SelectLabel>
            <SelectItem key={1} value="apple">Apple</SelectItem>
            <SelectItem key={2} value="banana">Banana</SelectItem>
            <SelectItem key={3} value="blueberry">Blueberry</SelectItem>
            <SelectItem key={4} value="grapes">Grapes</SelectItem>
            <SelectItem key={5} value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
    </>
  );
};

export default CurrencyConvertor;
