import React, { Component } from "react";

type CardDetails = {
    id: string,
    title: string,
    description: string
}

type CardProps = {};

type CardState = {
    cardList: CardDetails[];
};

export default class Card extends Component<CardProps, CardState> {
  render() {
    return (
      <div className="border border-slate-400 px-3 py-2">
        <h2 className="text-center text-2xl">Card 1</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi amet
          deserunt exercitationem harum, ullam iste sed rem aut eos aspernatur
          explicabo, nemo nam aliquid consequuntur? Sequi rem accusantium earum
          alias!
        </p>
      </div>
    );
  }
}
