
export interface PictureType {
  url: string;
  public_id: string;
}

export interface PostType {
    _id: string;
    TitlePost: string;
    DescriptionPost: string;
    PicturePost: PictureType[];
    createPost: string;

  }