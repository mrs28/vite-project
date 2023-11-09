// export interface CardProps {
//   item: object;
//   img?: string,
//   category?: string,
//   id?: string,
//   name?: string
// }

// card.props.d.ts

    export interface CardProps {
      item: {
        id: string;
        name: string;
        category: string;
        img: string;
      };
    }
  