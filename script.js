const getData = async () => {

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Client-ID d28c8fa12d7235b");
    try {
        const response = await fetch(
            "https://api.imgur.com/3/gallery/hot/viral/day/1?showViral=true",
            {
                method: "GET",
                headers: myHeaders,
                redirect: "follow",
            }
        );
        const data = await response.json();
       
       return data
    } catch (err) {
        console.log("err", err.message);
    }
}

const imageCard = (link) => {
    const flex_div = document.querySelector(".flex_div");
    const innerdivflex = document.createElement('div');
    const image = document.createElement('img')
    image.src = `${link}`;

    const fulllower = document.createElement('div');
    fulllower.className = "fulllower"
    const text = document.createElement('div');
    text.className = "text";


    innerdivflex.append(image)
    fulllower.append(text)
}

const generateContent = async () => {
  const { data } = await getData();
  console.log(data);

  data.map(({ images }) => {
    images.map(({ link }) => {
      imageCard(link);
    });
  });
};
