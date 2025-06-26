interface itemChildren {
  description: string;
  photo_id: string;
}

export interface ItemList {
  _id: string,
  main_title: string;
  main_photo_id: string;
  main_description: string;
  content?: itemChildren[];
}
