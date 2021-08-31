//Utility Types
//Type => Type(transformed)

//Index Type
{
  type Animal = {
    name: string;
    age: number;
    gender: "male" | "female";
  };

  type NewName = Animal["name"]; // string
  const text: Name = "string";

  type Gender = Animal["gender"]; // 'male' | 'female'
  type Keys = keyof Animal; // 'name' | 'age' | 'gender'
  const key: Keys = "name";
}

//Mapped Type
{
  type Video = {
    title: string;
    author: string;
    description: string;
  };
  //   type VideoOptional = {
  //     title?: string;
  //     author?: string;
  //     description?: string;
  //   };
  //   type VideoReadONly = {
  //     readonly title: string;
  //     readonly author: string;
  //   };

  type Optional<T> = {
    [P in keyof T]?: T[P]; // for ... in
  };
  type VideoOptional = Optional<Video>;
  const videoOp: VideoOptional = {};

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };
  type VideoReadonly = ReadOnly<Video>;
  const videoReadonly: VideoReadonly = {
    title: "title",
    author: "author",
    description: "description",
  };
  videoReadonly.title = "other-title";

  type Nullable<T> = {
    [P in keyof T]: T[P] | null;
  };
  const nullObj: Nullable<Video> = {
    author: null,
    title: null,
    description: null,
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };
  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}

//Conditional Type
{
  type Check<T> = T extends string ? boolean : number;
  type T1 = Check<string>; //boolean
  type T2 = Check<() => void>;
}

//Partial Type
{
  type ToDo = {
    title: string;
    descripton: string;
    label: string;
    priority: string;
  };
  //   function lookTS(todo: Readonly<ToDo>) {}
  function updateTodo(todo: ToDo, filedsToUpdate: Partial<ToDo>): ToDo {
    return { ...todo, ...filedsToUpdate };
  }
  const todo: ToDo = {
    title: "string",
    descripton: "string",
    label: "string",
    priority: "string",
  };
  const updated = updateTodo(todo, { priority: "change" });
}

//Pick Type
{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  function getVideo(id: string): Video {
    return {
      id,
      title: "video",
      url: "https://...",
      data: "byte-data...",
    };
  }
  function getVideoMetadata(id: string): Pick<Video, "id" | "title"> {
    return {
      id,
      title: "video",
    };
  }
}

//Omit Type
{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };
  type VideoMetas = Omit<Video, "url" | "data">;
  function getVideoMetadataOmit(id: string): VideoMetas {
    return {
      id,
      title: "video",
    };
  }
}

//Record
type PageInfo = {
  title: string;
};
type Page = "home" | "about" | "contact";

const nav: Record<Page, PageInfo> = {
  home: { title: "Home" },
  about: { title: "About" },
  contact: { title: "Contact" },
};
