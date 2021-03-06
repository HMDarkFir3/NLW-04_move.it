import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      backgroundOverlay: string;
      backgroundBox: string;

      grayLine: string;
      text: string;
      textHighlight: string;
      title: string;
      red: string;
      green: string;
      blue: string;
      blueDark: string;
      blueTwitter: string;
    };

    boxShadow: string;
  }

  export interface CustomTheme {
    title: string;

    colors: {
      background: string;
      backgroundOverlay: string;
      backgroundBox: string;

      grayLine: string;
      text: string;
      textHighlight: string;
      title: string;
      red: string;
      green: string;
      blue: string;
      blueDark: string;
    };

    boxShadow: string;
  }
}
