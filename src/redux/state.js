export const insialState = {
      authenticated :{
        user :{
        },
        accessToken : localStorage.getItem('access_token') ,
      },
      categories: [],
      projects :[],
      handymans :[],
      nearerHandymans :[],
      handymanPortfolio : [
        {
          id:1,
          image1: "https://picsum.photos/200/300",
          image2: "https://picsum.photos/200/300",
          image3: "https://picsum.photos/200/300",
          image4: "https://picsum.photos/200/300",
          image5: "https://picsum.photos/200/300",
          title: "This is the title",
          description: " for the second portfolio item.",
        },
        {
          id:2,
          image1: "https://picsum.photos/200/300",
          image2: "https://picsum.photos/200/300",
          image3: "https://picsum.photos/200/300",
          image4: "https://picsum.photos/200/300",
          image5: "https://picsum.photos/200/300",
          title: "This is the title",
          description: "This is the description for the second portfolio item.This is the description for the second portfolio item. This is the description for the second portfolio item.",
        },{
          id:3,
          image1: "https://picsum.photos/200/300",
          image2: "https://picsum.photos/200/300",
          image3: "https://picsum.photos/200/300",
          image4: "https://picsum.photos/200/300",
          image5: "https://picsum.photos/200/300",
          title: "This is the title",
          description: "This is the description for the second portfolio item.This is the description for the second portfolio item. This is the description for the second portfolio item.",
        },
        {
          id:4,
          image1: "https://picsum.photos/200/300",
          image2: "https://picsum.photos/200/300",
          image3: "https://picsum.photos/200/300",
          image4: "https://picsum.photos/200/300",
          image5: "https://picsum.photos/200/300",
          title: "This is the title",
          description: "This is the description for the second portfolio item.This is the description for the second portfolio item. This is the description for the second portfolio item.",
        },
        {
          id:5,
          image1: "https://picsum.photos/200/300",
          image2: "https://picsum.photos/200/300",
          image3: "https://picsum.photos/200/300",
          image4: "https://picsum.photos/200/300",
          image5: "https://picsum.photos/200/300",
          title: "This is the title",
          description: "This is the description for the second portfolio item.This is the description for the second portfolio item. This is the description for the second portfolio item.",
        },
      ],
}