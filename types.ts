export type HeroQuery = {
  heroCollection: {
    items: {
      preTitle: string;
      subTitle: string;
      title: string;
      _id: string;
      callToActionsCollection: {
        items: {
          link: string;
          title: string;
        }[];
      };
    }[];
  };
};

export type LogoWallQuery = {
  assetCollection: {
    items: {
      fileName: string;
      url: string;
      width: number;
      height: number;
    }[];
  };
};

export type HeaderNavQuery = {
  navigationCollection: {
    items: {
      name: string;
      linksCollection: {
        items: {
          title: string;
          link: string;
        }[];
      };
    }[];
  };
};
