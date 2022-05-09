<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Category</th>
        <th scope="col">Name</th>
        <th scope="col" width="300">操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="restaurant in restaurants" :key="restaurant.id">
        <th scope="row">
          {{ restaurant.id }}
        </th>
        <td>{{ restaurant.Category ? restaurant.Category.name : "未分類" }}</td>
        <td>{{ restaurant.name }}</td>
        <td class="d-flex justify-content-between">
          <router-link :to="{ name:'admin-restaurant', params: { id: restaurant.id } }" class="btn btn-link">Show</router-link>

          <router-link :to="{name: 'admin-restaurant-edit', params: {id: restaurant.id } }" class="btn btn-link">Edit</router-link>

          <button 
          @click.stop.prevent="deleteRestaurant(restaurant.id)"
          type="button" class="btn btn-link">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
const dummyData = {
  restaurants: [
    {
      id: 1,
      name: "Sheridan Howell",
      tel: "1-384-975-3985 x1113",
      address: "815 Marianna Branch",
      opening_hours: "08:00",
      description:
        "Fuga maiores veritatis ex tenetur vitae deleniti earum rerum assumenda.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=97.47941604041989",
      viewCounts: 3,
      createdAt: "2022-04-24T01:28:16.000Z",
      updatedAt: "2022-04-27T10:17:25.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-04-24T01:28:16.000Z",
        updatedAt: "2022-04-24T01:28:16.000Z",
      },
    },
    {
      id: 2,
      name: "Aida Bogan",
      tel: "496.645.7587 x9275",
      address: "5327 Sim Valleys",
      opening_hours: "08:00",
      description: "Temporibus atque officiis dicta.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=68.56842860829168",
      viewCounts: 1,
      createdAt: "2022-04-24T01:28:16.000Z",
      updatedAt: "2022-04-25T06:01:04.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-04-24T01:28:16.000Z",
        updatedAt: "2022-04-24T01:28:16.000Z",
      },
    },
    {
      id: 3,
      name: "Maud Crooks",
      tel: "989-695-6081 x82329",
      address: "856 Renner Inlet",
      opening_hours: "08:00",
      description: "suscipit",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=86.39768197158438",
      viewCounts: 0,
      createdAt: "2022-04-24T01:28:16.000Z",
      updatedAt: "2022-04-24T01:28:16.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-04-24T01:28:16.000Z",
        updatedAt: "2022-04-24T01:28:16.000Z",
      },
    },
    {
      id: 4,
      name: "Elenora Hintz",
      tel: "074-145-2622 x622",
      address: "3350 Salma River",
      opening_hours: "08:00",
      description: "voluptates",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=34.22397353871966",
      viewCounts: 0,
      createdAt: "2022-04-24T01:28:16.000Z",
      updatedAt: "2022-04-24T01:28:16.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-04-24T01:28:16.000Z",
        updatedAt: "2022-04-24T01:28:16.000Z",
      },
    },
    {
      id: 5,
      name: "Mrs. Breanne Terry",
      tel: "358.529.5665 x60812",
      address: "5673 Hassan Walks",
      opening_hours: "08:00",
      description:
        "Quia odio non porro officia. Delectus doloribus facilis dolores ut. Dolores omnis in natus illo. Voluptas dolores at voluptatem. Qui quia perspiciatis labore maiores aspernatur assumenda illum voluptas. Fugiat doloremque aliquid voluptate suscipit quod.\n \rMaiores eum voluptatem ipsum qui quia quo modi non fugit. Cum iste fugiat velit commodi nihil tenetur voluptate. Eaque qui possimus iusto adipisci repellat voluptatem assumenda harum. Molestiae dicta suscipit et ex ut et voluptatem esse. Quibusdam tempora fugiat.\n \rItaque vel et. Ea et dolor fugit voluptatibus vero. Odio non nam.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=50.27604384102513",
      viewCounts: 0,
      createdAt: "2022-04-24T01:28:16.000Z",
      updatedAt: "2022-04-24T01:28:16.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-04-24T01:28:16.000Z",
        updatedAt: "2022-04-24T01:28:16.000Z",
      },
    },
    {
      id: 6,
      name: "Judah Blanda",
      tel: "748-035-9503 x987",
      address: "52638 Victoria Viaduct",
      opening_hours: "08:00",
      description:
        "Distinctio assumenda voluptas quo rerum nihil incidunt nam.\nAsperiores magnam facere qui vel maiores ut.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=77.89951851723809",
      viewCounts: 0,
      createdAt: "2022-04-24T01:28:16.000Z",
      updatedAt: "2022-04-24T01:28:16.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-04-24T01:28:16.000Z",
        updatedAt: "2022-04-24T01:28:16.000Z",
      },
    },
    {
      id: 7,
      name: "Leann Kuvalis",
      tel: "1-240-085-3650 x063",
      address: "9240 Lemke Drive",
      opening_hours: "08:00",
      description:
        "Aspernatur in ullam. Maiores quia sint aliquam distinctio vel aut omnis ullam. Libero est distinctio cumque in. Et sed qui voluptatem modi.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=10.677589387613406",
      viewCounts: 0,
      createdAt: "2022-04-24T01:28:16.000Z",
      updatedAt: "2022-04-24T01:28:16.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-04-24T01:28:16.000Z",
        updatedAt: "2022-04-24T01:28:16.000Z",
      },
    },
    {
      id: 8,
      name: "Jacinto Schuppe",
      tel: "770-873-9471 x693",
      address: "94853 Brando Circle",
      opening_hours: "08:00",
      description: "Libero porro qui nobis hic in quam reiciendis.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=22.151121313211554",
      viewCounts: 0,
      createdAt: "2022-04-24T01:28:16.000Z",
      updatedAt: "2022-04-24T01:28:16.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-04-24T01:28:16.000Z",
        updatedAt: "2022-04-24T01:28:16.000Z",
      },
    },
    {
      id: 9,
      name: "Miss Terrance Franecki",
      tel: "758-810-4527 x41908",
      address: "392 Heathcote Unions",
      opening_hours: "08:00",
      description:
        "Omnis nesciunt ratione vero dolores odit omnis eum deleniti. Dolorum est dignissimos voluptates blanditiis iure debitis consequuntur laboriosam qui. Magnam provident commodi doloribus totam nesciunt et molestiae. Hic occaecati et molestiae fugiat praesentium rerum voluptas provident. Aliquid est provident praesentium eligendi facilis dolores repudiandae reprehenderit. Possimus aliquam tempore dolores.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=15.764172353988105",
      viewCounts: 0,
      createdAt: "2022-04-24T01:28:16.000Z",
      updatedAt: "2022-04-24T01:28:16.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-04-24T01:28:16.000Z",
        updatedAt: "2022-04-24T01:28:16.000Z",
      },
    },
    {
      id: 10,
      name: "Henri Kuvalis",
      tel: "1-055-293-5634",
      address: "14275 Christy Pines",
      opening_hours: "08:00",
      description:
        "Non error eos molestiae aut nihil doloremque deleniti sunt.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=1.3422262994060352",
      viewCounts: 0,
      createdAt: "2022-04-24T01:28:16.000Z",
      updatedAt: "2022-04-24T01:28:16.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-04-24T01:28:16.000Z",
        updatedAt: "2022-04-24T01:28:16.000Z",
      },
    },
    {
      id: 11,
      name: "Lisette Hegmann V",
      tel: "867.142.5871 x97147",
      address: "8108 Mante Path",
      opening_hours: "08:00",
      description:
        "Libero voluptatem voluptatem iure laudantium quia. Odit et eos officiis esse aut molestiae sunt quisquam. Et quam nesciunt iste ut. Aut omnis harum culpa dignissimos velit. Tempora rerum consequuntur laborum velit. Quisquam atque earum dolorem facilis quia nam.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=37.82750139630026",
      viewCounts: 0,
      createdAt: "2022-04-24T01:28:16.000Z",
      updatedAt: "2022-04-24T01:28:16.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-04-24T01:28:16.000Z",
        updatedAt: "2022-04-24T01:28:16.000Z",
      },
    },
    {
      id: 12,
      name: "Conor Effertz",
      tel: "072-497-7850",
      address: "42577 Corkery Park",
      opening_hours: "08:00",
      description:
        "Hic repellat et at nemo nulla qui. Et aut adipisci doloribus quaerat voluptatem. Autem voluptatem sint laudantium labore atque minus ut amet autem. Qui magni eaque vel enim.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=31.825958250985508",
      viewCounts: 0,
      createdAt: "2022-04-24T01:28:16.000Z",
      updatedAt: "2022-04-24T01:28:16.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-04-24T01:28:16.000Z",
        updatedAt: "2022-04-24T01:28:16.000Z",
      },
    },
    {
      id: 13,
      name: "Miss Taylor Harris",
      tel: "1-670-252-0437",
      address: "22562 Lela Curve",
      opening_hours: "08:00",
      description:
        "Commodi atque recusandae sit modi fugiat et. In vel est sed dolores. Temporibus impedit sed odio est ut atque deserunt quidem. Et dolores dolore dolorum non autem nisi. Et porro atque accusantium ipsa.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=38.56049431483166",
      viewCounts: 0,
      createdAt: "2022-04-24T01:28:16.000Z",
      updatedAt: "2022-04-24T01:28:16.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-04-24T01:28:16.000Z",
        updatedAt: "2022-04-24T01:28:16.000Z",
      },
    },
    {
      id: 14,
      name: "Eileen Boehm",
      tel: "416.657.0182 x66449",
      address: "607 Stanton Island",
      opening_hours: "08:00",
      description:
        "Quaerat reiciendis quia consequatur ea minima commodi ut. Adipisci assumenda at est. Culpa consequuntur a consequatur vel adipisci dolor dicta. Facere eveniet fugiat et mollitia minima aliquam facere numquam.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=18.879256588799365",
      viewCounts: 0,
      createdAt: "2022-04-24T01:28:16.000Z",
      updatedAt: "2022-04-24T01:28:16.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-04-24T01:28:16.000Z",
        updatedAt: "2022-04-24T01:28:16.000Z",
      },
    },
    {
      id: 15,
      name: "Bartholome Pfannerstill",
      tel: "(756) 509-3085 x82771",
      address: "470 Ocie Highway",
      opening_hours: "08:00",
      description:
        "Ut voluptatem atque quia rem sit quae ut rem distinctio. Ab et quo consequuntur. Incidunt quia sit. Et atque suscipit et.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=18.64692869418669",
      viewCounts: 0,
      createdAt: "2022-04-24T01:28:16.000Z",
      updatedAt: "2022-04-24T01:28:16.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-04-24T01:28:16.000Z",
        updatedAt: "2022-04-24T01:28:16.000Z",
      },
    },
    {
      id: 16,
      name: "Ebba Durgan",
      tel: "086-177-1449 x74569",
      address: "111 Dominique Ways",
      opening_hours: "08:00",
      description:
        "Modi labore eos voluptate quaerat cum omnis. Mollitia sapiente velit non consequuntur nesciunt aut error. Possimus est est accusamus aut aut aut voluptates sed. Officiis consectetur aliquam aut dolor qui est ex. Voluptatem optio cumque neque incidunt explicabo magni fugiat.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=12.871397988055477",
      viewCounts: 0,
      createdAt: "2022-04-24T01:28:16.000Z",
      updatedAt: "2022-04-24T01:28:16.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-04-24T01:28:16.000Z",
        updatedAt: "2022-04-24T01:28:16.000Z",
      },
    },
    {
      id: 17,
      name: "Sarina Lakin",
      tel: "1-049-170-9283",
      address: "78679 Serena Trafficway",
      opening_hours: "08:00",
      description:
        "Qui et corporis et minima similique porro. Tempora error eos voluptas eligendi sequi. Blanditiis praesentium ipsa quam maxime doloremque. Consequatur veniam sint delectus omnis illum qui. Odio pariatur omnis hic est minima est. Qui vel sunt ratione maxime.\n \rEst repellendus ad minus repellendus ea a similique architecto voluptates. Inventore ut culpa officiis magni laborum nisi. Omnis id aliquid inventore laudantium. Rerum cupiditate veritatis assumenda aut accusamus. Est ut repudiandae maxime impedit officiis qui. Sequi eum atque voluptatem.\n \rEa dolore mollitia ea id et incidunt adipisci sit praesentium. Voluptas est consequatur numquam id optio. Excepturi amet et id est ipsa in harum. Voluptas placeat animi a asperiores quae cupiditate voluptatum.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=97.42403325230866",
      viewCounts: 0,
      createdAt: "2022-04-24T01:28:16.000Z",
      updatedAt: "2022-04-24T01:28:16.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-04-24T01:28:16.000Z",
        updatedAt: "2022-04-24T01:28:16.000Z",
      },
    },
    {
      id: 18,
      name: "Idella Grimes",
      tel: "(941) 716-9600",
      address: "02968 Jerome Ridge",
      opening_hours: "08:00",
      description:
        "Modi sed sequi quia nisi ducimus sed. Consectetur aut et. Architecto cumque sed molestiae necessitatibus omnis atque et eius. Autem quo fugit quia minus consequuntur. Reprehenderit ut veritatis ut quibusdam. Aliquam pariatur placeat corrupti.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=25.1859352078591",
      viewCounts: 0,
      createdAt: "2022-04-24T01:28:16.000Z",
      updatedAt: "2022-04-24T01:28:16.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-04-24T01:28:16.000Z",
        updatedAt: "2022-04-24T01:28:16.000Z",
      },
    },
    {
      id: 19,
      name: "Kendrick Waelchi Sr.",
      tel: "(718) 304-9222",
      address: "9140 Layne Green",
      opening_hours: "08:00",
      description:
        "Molestias praesentium non repellat ex asperiores molestiae adipisci voluptatem odit.\nUt nulla ut impedit.\nCorrupti dolores soluta tempora dolor commodi ducimus.\nEa quia qui consequatur nam accusamus totam.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=80.55099438132454",
      viewCounts: 0,
      createdAt: "2022-04-24T01:28:16.000Z",
      updatedAt: "2022-04-24T01:28:16.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-04-24T01:28:16.000Z",
        updatedAt: "2022-04-24T01:28:16.000Z",
      },
    },
    {
      id: 20,
      name: "Dr. Neha Bayer",
      tel: "1-424-283-8023",
      address: "333 Sauer Pass",
      opening_hours: "08:00",
      description:
        "Adipisci nesciunt consequatur laboriosam.\nAut et non voluptatem modi repellat voluptatem omnis nesciunt ut.\nIpsa enim architecto odio cupiditate non.\nFugiat inventore illo eligendi iste.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=6.249688868512981",
      viewCounts: 0,
      createdAt: "2022-04-24T01:28:16.000Z",
      updatedAt: "2022-04-24T01:28:16.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-04-24T01:28:16.000Z",
        updatedAt: "2022-04-24T01:28:16.000Z",
      },
    },
    {
      id: 21,
      name: "Isadore Langosh I",
      tel: "(707) 955-1575",
      address: "590 Mekhi Path",
      opening_hours: "08:00",
      description: "tempora",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=38.5356990010205",
      viewCounts: 0,
      createdAt: "2022-04-24T01:28:16.000Z",
      updatedAt: "2022-04-24T01:28:16.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-04-24T01:28:16.000Z",
        updatedAt: "2022-04-24T01:28:16.000Z",
      },
    },
    {
      id: 22,
      name: "Adolf Windler",
      tel: "619-156-1362 x816",
      address: "8941 Wuckert Fall",
      opening_hours: "08:00",
      description: "ducimus laborum voluptatem",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=33.12890374966548",
      viewCounts: 0,
      createdAt: "2022-04-24T01:28:16.000Z",
      updatedAt: "2022-04-24T01:28:16.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-04-24T01:28:16.000Z",
        updatedAt: "2022-04-24T01:28:16.000Z",
      },
    },
    {
      id: 23,
      name: "Vickie Deckow",
      tel: "1-788-434-7594 x2449",
      address: "816 Corine Park",
      opening_hours: "08:00",
      description:
        "Et qui distinctio sint.\nSed itaque expedita quibusdam.\nMolestiae beatae praesentium hic omnis quisquam optio.\nNon dolore voluptatem placeat qui.\nAnimi quia nesciunt eos ea.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=2.320608053620954",
      viewCounts: 0,
      createdAt: "2022-04-24T01:28:16.000Z",
      updatedAt: "2022-04-24T01:28:16.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-04-24T01:28:16.000Z",
        updatedAt: "2022-04-24T01:28:16.000Z",
      },
    },
    {
      id: 24,
      name: "Mr. Annie Hermann",
      tel: "(973) 662-7024 x2320",
      address: "0128 Rogahn Plain",
      opening_hours: "08:00",
      description:
        "Perspiciatis rerum provident quia fuga cumque quas qui quo et.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=49.700674567732705",
      viewCounts: 0,
      createdAt: "2022-04-24T01:28:16.000Z",
      updatedAt: "2022-04-24T01:28:16.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-04-24T01:28:16.000Z",
        updatedAt: "2022-04-24T01:28:16.000Z",
      },
    },
    {
      id: 25,
      name: "Mr. Kiana Walker",
      tel: "1-111-296-7090 x112",
      address: "31922 Hyatt Mountain",
      opening_hours: "08:00",
      description: "Soluta amet dicta ducimus et.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=60.6570370128237",
      viewCounts: 0,
      createdAt: "2022-04-24T01:28:16.000Z",
      updatedAt: "2022-04-24T01:28:16.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-04-24T01:28:16.000Z",
        updatedAt: "2022-04-24T01:28:16.000Z",
      },
    },
    {
      id: 26,
      name: "Baby Fahey II",
      tel: "281.871.6237 x0739",
      address: "20370 Name Pine",
      opening_hours: "08:00",
      description:
        "Temporibus culpa necessitatibus distinctio sit nesciunt illum.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=17.67061444071969",
      viewCounts: 0,
      createdAt: "2022-04-24T01:28:16.000Z",
      updatedAt: "2022-04-24T01:28:16.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-04-24T01:28:16.000Z",
        updatedAt: "2022-04-24T01:28:16.000Z",
      },
    },
    {
      id: 27,
      name: "Braeden Johnston",
      tel: "(818) 877-6033 x38021",
      address: "632 Jayme Cliffs",
      opening_hours: "08:00",
      description: "Fugit nemo voluptatem sint sed maxime maxime quis.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=63.472772091289166",
      viewCounts: 0,
      createdAt: "2022-04-24T01:28:16.000Z",
      updatedAt: "2022-04-24T01:28:16.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-04-24T01:28:16.000Z",
        updatedAt: "2022-04-24T01:28:16.000Z",
      },
    },
    {
      id: 28,
      name: "Savannah Robel",
      tel: "1-496-946-8622 x8094",
      address: "190 Tanner Village",
      opening_hours: "08:00",
      description:
        "Est dolor ratione cum eveniet in asperiores.\nQuia quasi cupiditate ut molestiae quos neque aperiam.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=60.22020739165617",
      viewCounts: 0,
      createdAt: "2022-04-24T01:28:16.000Z",
      updatedAt: "2022-04-24T01:28:16.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-04-24T01:28:16.000Z",
        updatedAt: "2022-04-24T01:28:16.000Z",
      },
    },
    {
      id: 29,
      name: "Brennon Stamm",
      tel: "591.567.3434",
      address: "2603 Juliana Walk",
      opening_hours: "08:00",
      description:
        "Nulla dignissimos ea qui. Et et qui alias rerum explicabo. Tenetur ut maxime dolorum quis ipsum sit fugit quidem vel. Saepe ipsam earum nemo repudiandae tenetur sapiente et.\n \rDolores officiis eum voluptatem in hic magni eligendi ipsa. Qui vel recusandae et culpa ipsum suscipit fuga. Ut fugit id dolorum modi nemo saepe ut. Hic laudantium est ratione sunt rem odio neque qui. Recusandae est quidem incidunt quasi consequatur. Vel voluptas autem voluptatem et qui.\n \rMolestiae rerum necessitatibus rerum sit veritatis dicta iste enim expedita. Distinctio rerum voluptas. Earum distinctio repellat alias.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=16.050617200312047",
      viewCounts: 0,
      createdAt: "2022-04-24T01:28:16.000Z",
      updatedAt: "2022-04-24T01:28:16.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-04-24T01:28:16.000Z",
        updatedAt: "2022-04-24T01:28:16.000Z",
      },
    },
    {
      id: 30,
      name: "Russ Johns",
      tel: "1-840-996-7034",
      address: "3768 Shaylee Roads",
      opening_hours: "08:00",
      description:
        "Iure et id quis ad distinctio maxime ratione nesciunt dolor. Iure molestiae eos dolorem ea asperiores qui deserunt eligendi dolorem. Et qui eveniet quis quia quasi et alias sed alias. Tenetur eius praesentium quis corporis omnis hic.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=62.8467718152808",
      viewCounts: 0,
      createdAt: "2022-04-24T01:28:16.000Z",
      updatedAt: "2022-04-24T01:28:16.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-04-24T01:28:16.000Z",
        updatedAt: "2022-04-24T01:28:16.000Z",
      },
    },
    {
      id: 31,
      name: "Eden O'Connell",
      tel: "1-944-562-7092 x096",
      address: "4449 Wintheiser Village",
      opening_hours: "08:00",
      description:
        "Adipisci reprehenderit assumenda. Occaecati perferendis voluptatem quibusdam. Aperiam et aspernatur expedita esse.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=1.0509677249631366",
      viewCounts: 0,
      createdAt: "2022-04-24T01:28:16.000Z",
      updatedAt: "2022-04-24T01:28:16.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-04-24T01:28:16.000Z",
        updatedAt: "2022-04-24T01:28:16.000Z",
      },
    },
    {
      id: 32,
      name: "Maybell Emmerich",
      tel: "240-416-8628 x421",
      address: "5379 Cierra Plains",
      opening_hours: "08:00",
      description:
        "Est enim libero quia voluptate magni ipsam aliquid ex earum.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=28.86692944298208",
      viewCounts: 0,
      createdAt: "2022-04-24T01:28:16.000Z",
      updatedAt: "2022-04-24T01:28:16.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-04-24T01:28:16.000Z",
        updatedAt: "2022-04-24T01:28:16.000Z",
      },
    },
    {
      id: 33,
      name: "Althea Mayert",
      tel: "198-885-0900",
      address: "640 Jakubowski Roads",
      opening_hours: "08:00",
      description:
        "Quis perspiciatis officiis soluta dolorum occaecati aut. Non iure aliquid exercitationem voluptatibus quis sed perferendis reiciendis doloremque. Dolorum cum error a ut nobis ratione sequi blanditiis. Dignissimos ducimus ea voluptatem saepe perferendis expedita voluptas.\n \rAccusamus minus magnam et quisquam eveniet doloribus. Debitis repudiandae ea quasi et. Non quod magnam non non corrupti optio. Ducimus modi magnam non molestias. Corrupti earum pariatur cum exercitationem voluptate quos quae. Ipsum quis vel ut qui odio dolor doloremque voluptatem.\n \rFugit accusantium sequi inventore molestiae. Aspernatur dolores voluptas sint. At voluptatem sapiente eaque suscipit id facere optio. Dicta eum voluptatum sapiente animi laudantium illo reiciendis sint. Aperiam a in a minus quia qui consequuntur.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=20.04740509906786",
      viewCounts: 0,
      createdAt: "2022-04-24T01:28:16.000Z",
      updatedAt: "2022-04-24T01:28:16.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-04-24T01:28:16.000Z",
        updatedAt: "2022-04-24T01:28:16.000Z",
      },
    },
    {
      id: 34,
      name: "Dr. Aliza Grady",
      tel: "504-272-1541 x6931",
      address: "81650 Macejkovic Landing",
      opening_hours: "08:00",
      description:
        "Earum commodi dignissimos soluta enim et aut.\nConsequatur est incidunt quos quibusdam architecto dicta ut.\nNon accusantium veritatis fugiat voluptas hic explicabo atque.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=77.95115678097156",
      viewCounts: 0,
      createdAt: "2022-04-24T01:28:16.000Z",
      updatedAt: "2022-04-24T01:28:16.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-04-24T01:28:16.000Z",
        updatedAt: "2022-04-24T01:28:16.000Z",
      },
    },
    {
      id: 35,
      name: "Tess Lang Jr.",
      tel: "1-395-386-1792 x5377",
      address: "07310 Stamm Island",
      opening_hours: "08:00",
      description:
        "Dolores perspiciatis a qui excepturi. Officiis velit dolor magni et. Sint deleniti quo. Fugiat quia voluptatem omnis id dolor veritatis aut.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=0.22404387041286",
      viewCounts: 0,
      createdAt: "2022-04-24T01:28:16.000Z",
      updatedAt: "2022-04-24T01:28:16.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-04-24T01:28:16.000Z",
        updatedAt: "2022-04-24T01:28:16.000Z",
      },
    },
    {
      id: 36,
      name: "Raymundo Connelly",
      tel: "588.878.7440",
      address: "5884 Funk Crescent",
      opening_hours: "08:00",
      description:
        "Esse qui impedit sit et.\nEst qui dolorum tempore consequatur repellat nulla quia dignissimos sint.\nSint repellendus et quia eveniet officiis qui totam et.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=68.60076974306628",
      viewCounts: 0,
      createdAt: "2022-04-24T01:28:16.000Z",
      updatedAt: "2022-04-24T01:28:16.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-04-24T01:28:16.000Z",
        updatedAt: "2022-04-24T01:28:16.000Z",
      },
    },
    {
      id: 37,
      name: "Jaquan Kuhlman",
      tel: "422.809.8917 x9741",
      address: "048 Bauch Highway",
      opening_hours: "08:00",
      description: "vel blanditiis minus",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=71.63671478060284",
      viewCounts: 0,
      createdAt: "2022-04-24T01:28:16.000Z",
      updatedAt: "2022-04-24T01:28:16.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-04-24T01:28:16.000Z",
        updatedAt: "2022-04-24T01:28:16.000Z",
      },
    },
    {
      id: 38,
      name: "Bill Schaden",
      tel: "(884) 158-4017 x8881",
      address: "790 Marilou Station",
      opening_hours: "08:00",
      description:
        "Corrupti optio aut nobis esse eos necessitatibus molestiae accusamus iure. Recusandae maiores in ipsum et aut est ducimus expedita quis. Consequatur nesciunt similique ex non.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=71.59845556457785",
      viewCounts: 0,
      createdAt: "2022-04-24T01:28:16.000Z",
      updatedAt: "2022-04-24T01:28:16.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-04-24T01:28:16.000Z",
        updatedAt: "2022-04-24T01:28:16.000Z",
      },
    },
    {
      id: 39,
      name: "Otis Cartwright",
      tel: "825.034.6927",
      address: "6782 Nayeli Walks",
      opening_hours: "08:00",
      description:
        "Autem commodi dignissimos nihil officiis. Deleniti quod dolores porro delectus rerum ad ut. Consequatur sapiente similique qui delectus consequuntur repudiandae deleniti aut et. A nisi natus delectus. Aut qui et sed harum aut amet illum adipisci. Vel perferendis laborum.\n \rBlanditiis dolorum sed dicta omnis voluptatum placeat esse autem consequatur. Non velit sequi ut consequatur aut. Iure temporibus nihil esse dolorum quaerat.\n \rOdio id repellat assumenda nostrum aliquid esse aut quas ea. Consequuntur at id mollitia dolor aliquam quia architecto voluptatem. Alias id reiciendis aut. Sit et neque. Deleniti qui officia.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=47.1858771580675",
      viewCounts: 0,
      createdAt: "2022-04-24T01:28:16.000Z",
      updatedAt: "2022-04-24T01:28:16.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-04-24T01:28:16.000Z",
        updatedAt: "2022-04-24T01:28:16.000Z",
      },
    },
    {
      id: 40,
      name: "Dr. Myrtice Nader",
      tel: "1-325-786-9058",
      address: "880 Metz Vista",
      opening_hours: "08:00",
      description:
        "Assumenda labore sed sint. Rem ea modi. Sint neque quidem et omnis placeat. Et asperiores mollitia officiis in sapiente ab. Et tenetur rerum veritatis consequatur impedit necessitatibus iste sed.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=12.953157091760836",
      viewCounts: 0,
      createdAt: "2022-04-24T01:28:16.000Z",
      updatedAt: "2022-04-24T01:28:16.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-04-24T01:28:16.000Z",
        updatedAt: "2022-04-24T01:28:16.000Z",
      },
    },
    {
      id: 41,
      name: "Hallie Bartoletti",
      tel: "(484) 206-7747 x8035",
      address: "5091 Louisa Avenue",
      opening_hours: "08:00",
      description:
        "Rerum aut aut id nobis voluptas assumenda aut. Ea et voluptatem.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=72.10479388523687",
      viewCounts: 0,
      createdAt: "2022-04-24T01:28:16.000Z",
      updatedAt: "2022-04-24T01:28:16.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-04-24T01:28:16.000Z",
        updatedAt: "2022-04-24T01:28:16.000Z",
      },
    },
    {
      id: 42,
      name: "Katrina Wolf",
      tel: "846.296.6598",
      address: "527 Cleo Villages",
      opening_hours: "08:00",
      description: "Doloribus odio facere laborum fugit incidunt recusandae.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=56.83243629329171",
      viewCounts: 0,
      createdAt: "2022-04-24T01:28:16.000Z",
      updatedAt: "2022-04-24T01:28:16.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-04-24T01:28:16.000Z",
        updatedAt: "2022-04-24T01:28:16.000Z",
      },
    },
    {
      id: 43,
      name: "Randall Donnelly",
      tel: "924.197.2351",
      address: "7396 Rodriguez Expressway",
      opening_hours: "08:00",
      description: "Pariatur et velit qui aperiam voluptatem ut.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=81.84020116605934",
      viewCounts: 0,
      createdAt: "2022-04-24T01:28:16.000Z",
      updatedAt: "2022-04-24T01:28:16.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-04-24T01:28:16.000Z",
        updatedAt: "2022-04-24T01:28:16.000Z",
      },
    },
    {
      id: 44,
      name: "Deven Gerlach IV",
      tel: "(781) 910-6498 x2288",
      address: "19489 Hanna Plains",
      opening_hours: "08:00",
      description: "nemo itaque cumque",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=70.6441038963306",
      viewCounts: 0,
      createdAt: "2022-04-24T01:28:16.000Z",
      updatedAt: "2022-04-24T01:28:16.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-04-24T01:28:16.000Z",
        updatedAt: "2022-04-24T01:28:16.000Z",
      },
    },
    {
      id: 45,
      name: "Ora Lehner",
      tel: "623-588-9304 x6199",
      address: "514 Nakia Circle",
      opening_hours: "08:00",
      description:
        "Quia aperiam qui. Quis eius quam voluptatem et. Voluptatibus est eligendi. Ipsam fugiat odit ut porro et ea. Consequatur incidunt maiores. Sapiente aut aspernatur vel ut repellat accusantium adipisci odit recusandae.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=24.270542003303163",
      viewCounts: 0,
      createdAt: "2022-04-24T01:28:16.000Z",
      updatedAt: "2022-04-24T01:28:16.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-04-24T01:28:16.000Z",
        updatedAt: "2022-04-24T01:28:16.000Z",
      },
    },
    {
      id: 46,
      name: "Ellsworth Murray DDS",
      tel: "712.523.9320 x300",
      address: "623 Josianne Villages",
      opening_hours: "08:00",
      description:
        "Accusantium impedit et neque ut eligendi quam amet. Incidunt non dignissimos rem in sunt. Voluptas totam nam ipsam quae et nostrum aut quas.\n \rEt in ex. Qui dolorem modi voluptate quia sit eos consequuntur rerum unde. Qui modi quia id porro. Modi vitae impedit soluta fuga aut temporibus dolores ducimus mollitia. Distinctio et nobis sed voluptatem est sint qui quam.\n \rConsequuntur velit nulla deleniti itaque fuga numquam eveniet sed. Ipsam assumenda modi aut reiciendis saepe dolorem ex. Est quis dolorum qui et et numquam iusto ut aut. Et et suscipit cum consectetur. Cupiditate corrupti nostrum accusamus ut qui eveniet. Ut quo in eos similique quia voluptatem ea sit amet.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=59.262605722132555",
      viewCounts: 0,
      createdAt: "2022-04-24T01:28:16.000Z",
      updatedAt: "2022-04-24T01:28:16.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-04-24T01:28:16.000Z",
        updatedAt: "2022-04-24T01:28:16.000Z",
      },
    },
    {
      id: 47,
      name: "Santina Ondricka",
      tel: "822.747.9851",
      address: "92600 Abe Underpass",
      opening_hours: "08:00",
      description:
        "Laborum cum et non et alias et nemo. Dolorem vitae voluptatem eaque architecto molestiae officia dolore deserunt. Odio illo nihil occaecati vel. Delectus rem numquam ipsa aut aperiam temporibus omnis illo.\n \rEarum ipsum architecto maxime quis. Aut commodi quia eligendi impedit deserunt omnis voluptatem nihil aliquam. Amet consectetur ab fuga id. Velit dolor eum iusto dolores amet veniam iusto et.\n \rDucimus et porro praesentium aut magni dolorum quidem. Est molestiae delectus rem aspernatur delectus eveniet. Consequatur vel ut. Voluptas quo corporis quibusdam. Nobis suscipit blanditiis fugiat.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=0.23065752343802703",
      viewCounts: 0,
      createdAt: "2022-04-24T01:28:16.000Z",
      updatedAt: "2022-04-24T01:28:16.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-04-24T01:28:16.000Z",
        updatedAt: "2022-04-24T01:28:16.000Z",
      },
    },
    {
      id: 48,
      name: "Winfield Cummerata II",
      tel: "938.643.8869 x3576",
      address: "24222 Verdie Villages",
      opening_hours: "08:00",
      description: "Ut non cupiditate.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=31.29592698833288",
      viewCounts: 0,
      createdAt: "2022-04-24T01:28:16.000Z",
      updatedAt: "2022-04-24T01:28:16.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-04-24T01:28:16.000Z",
        updatedAt: "2022-04-24T01:28:16.000Z",
      },
    },
    {
      id: 49,
      name: "Miss Candelario Streich",
      tel: "469-472-3247",
      address: "4584 Mercedes Mountain",
      opening_hours: "08:00",
      description:
        "Quibusdam quia magni et. Sunt rerum tempore earum et optio ex distinctio numquam. Est dolores ducimus. Ut delectus incidunt. Qui est nihil vitae maiores quia ex odio.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=91.361486953481",
      viewCounts: 0,
      createdAt: "2022-04-24T01:28:16.000Z",
      updatedAt: "2022-04-24T01:28:16.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-04-24T01:28:16.000Z",
        updatedAt: "2022-04-24T01:28:16.000Z",
      },
    },
    {
      id: 50,
      name: "Jairo Stehr",
      tel: "1-864-793-1139",
      address: "66447 Bahringer Hill",
      opening_hours: "08:00",
      description: "culpa nisi provident",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=32.49644338384421",
      viewCounts: 0,
      createdAt: "2022-04-24T01:28:16.000Z",
      updatedAt: "2022-04-24T01:28:16.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-04-24T01:28:16.000Z",
        updatedAt: "2022-04-24T01:28:16.000Z",
      },
    },
  ],
};

export default {
  data() {
    return {
      restaurants: [],
    };
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    fetchRestaurants() {
      this.restaurants = dummyData.restaurants;
    },
    deleteRestaurant(restaurantId) {
      this.restaurants = this.restaurants.filter(restaurant => restaurant.id !== restaurantId)
    }
  },
};
</script>