import React from "react";
import { shallow } from "enzyme";
import Square from "../components/square";

describe("index tests", () => {
  const onClick = jest.fn();

  describe("Square tests", () => {
    const factory = () => {
      const props = {
        value: "x",
        onClick,
        squareIndex: 1
      };

      return shallow(<Square {...props} />);
    };
    it("Should render Square with props", () => {
      expect.assertions(3);
      const wrapper = factory();

      expect(wrapper.find("button").length).toBe(1);
      expect(wrapper.find("button").hasClass("square")).toBeTruthy();
      expect(wrapper.find("button").text()).toEqual("x");
    });

    it("Should trigger function on click", () => {
      expect.assertions(1);
      const wrapper = factory();

      wrapper.find("button").simulate("click");
      expect(onClick).toHaveBeenCalledWith(1);
    });
  });
});
