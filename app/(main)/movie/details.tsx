import { View } from "react-native";
import React from "react";
import useSingleMovie from "@/hooks/query/movie/useSingleMovie";
import DetailFromList from "@/components/DetailFromList";
import DetailFromText from "@/components/DetailFromText";
import priceConverter from "@/utils/javascript/priceConverter";

const Details = ({ id }: { id: string }) => {
  const { data: movie } = useSingleMovie(id);

  const {
    budget,
    genres,
    origin_country,
    original_language,
    production_companies,
    production_countries,
    revenue,
    tagline,
    spoken_languages,
  } = movie;

  return (
    <View className="px-5">
      <DetailFromText title={"Tagline"} text={tagline} />

      <DetailFromList title={"Genres"} list={genres} />

      <DetailFromText title={"Budget"} text={priceConverter(budget)} />
      <DetailFromText title={"Revenue"} text={priceConverter(revenue)} />

      <DetailFromText title={"Original Language"} text={original_language} />
      <DetailFromList title={"Spoken Languages"} list={spoken_languages} />

      <DetailFromList
        title={"Origin Countries"}
        list={origin_country}
        textShow=""
      />
      <DetailFromList
        title={"Production Companies"}
        list={production_companies}
      />
      <DetailFromList
        title={"Production Countries"}
        list={production_countries}
      />
    </View>
  );
};

export default Details;
