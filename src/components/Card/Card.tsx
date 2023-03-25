import React, { Component } from "react";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AdbIcon from "@mui/icons-material/Adb";
import AddAlertIcon from "@mui/icons-material/AddAlert";

type CardDetails = {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
};

type CardProps = {};

type CardState = {
  cardList: CardDetails[];
};

export default class Card extends Component<CardProps, CardState> {
  constructor(props: CardProps) {
    super(props);

    this.state = {
      cardList: [
        {
          id: "1",
          title: "Card 1",
          icon: <AcUnitIcon className="mb-2 text-2xl" />,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex velit, facilis quaerat accusamus tenetur laborum ipsam nemo doloribus sequi mollitia aut ullam dolores tempora quos veritatis quasi aliquid libero ea.",
        },

        {
          id: "2",
          title: "Card 2",
          icon: <AdbIcon className="mb-2 text-2xl" />,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex velit, facilis quaerat accusamus tenetur laborum ipsam nemo doloribus sequi mollitia aut ullam dolores tempora quos veritatis quasi aliquid libero ea.",
        },

        {
          id: "3",
          title: "Card 3",
          icon: <AddAlertIcon className="mb-2 text-2xl" />,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex velit, facilis quaerat accusamus tenetur laborum ipsam nemo doloribus sequi mollitia aut ullam dolores tempora quos veritatis quasi aliquid libero ea.",
        },

        {
          id: "4",
          title: "Card 4",
          icon: <AddAlertIcon className="mb-2 text-2xl" />,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex velit, facilis quaerat accusamus tenetur laborum ipsam nemo doloribus sequi mollitia aut ullam dolores tempora quos veritatis quasi aliquid libero ea.",
        },
      ],
    };
  }

  render() {
    return (
      <div className="grid grid-cols-4 gap-x-5">
        {this.state.cardList.map((card) => (
          <div className="border border-slate-400 px-3 py-5">
            <span className="flex flex-col items-center">
              {card.icon}
              <h2 className="text-center text-2xl mb-2">{card.title}</h2>
            </span>

            <p className="text-center">{card.description}</p>
          </div>
        ))}
      </div>
    );
  }
}
