import aman1 from "./aman/aman_1.wav";
import aman2 from "./aman/aman_2.wav";
import aman3 from "./aman/aman_3.wav";
import aman4 from "./aman/aman_4.wav";
import aman5 from "./aman/aman_5.wav";

import jake1 from "./jake/jake_1.wav";
import jake2 from "./jake/jake_2.wav";
import jake3 from "./jake/jake_3.wav";
import jake4 from "./jake/jake_4.wav";
import jake5 from "./jake/jake_5.wav";

import shafqat1 from "./shafqat/shafqat_1.wav";
import shafqat2 from "./shafqat/shafqat_2.wav";
import shafqat3 from "./shafqat/shafqat_3.wav";
import shafqat4 from "./shafqat/shafqat_4.wav";
import shafqat5 from "./shafqat/shafqat_5.wav";

const pre_url = "https://voidbucketdemo.s3.us-east-2.amazonaws.com/";

const audio = [
  aman1,
  aman2,
  aman3,
  aman4,
  aman5,
  jake1,
  jake2,
  jake3,
  jake4,
  jake5,
  shafqat1,
  shafqat2,
  shafqat3,
  shafqat4,
  shafqat5,
];

const links = [
  pre_url + "aman_1.wav",
  pre_url + "aman_2.wav",
  pre_url + "aman_3.wav",
  pre_url + "aman_4.wav",
  pre_url + "aman_5.wav",
  pre_url + "jake_1.wav",
  pre_url + "jake_2.wav",
  pre_url + "jake_3.wav",
  pre_url + "jake_4.wav",
  pre_url + "jake_5.wav",
  pre_url + "shafqat_1.wav",
  pre_url + "shafqat_2.wav",
  pre_url + "shafqat_3.wav",
  pre_url + "shafqat_4.wav",
  pre_url + "shafqat_5.wav",
];

export { audio, links };
