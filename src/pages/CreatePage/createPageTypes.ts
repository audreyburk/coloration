export interface Item {
  label: string;
  fileName: string;
  indices?: number[];
}

export interface Section {
  name: string;
  sectionId: string;
  listId: string;
  items: Item[];
}

export interface Field {
  text: string;
  sprite?: string;
  outline?: boolean;
}

// perhaps we should define every field here, actually: name and number of elements
// that's what TS is for, right? make sure it's correct!
export interface ColorMap {
  [index: string]: string[]
}
