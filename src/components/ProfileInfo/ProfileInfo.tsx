import { StyleSheet, View, Image } from "react-native";

import { UserPhoto, Star, ShieldCheck } from "../../../assets/profile";
import { TextContent, EVariants } from "../TextContent";
import { styles } from "./profileInfo.styles";
type ProfileInfoProps = {
  userName: string;
  reviewCount: number;
  accauntStatus: string;
  userStatus: string;
};

export function ProfileInfo({
  userName,
  reviewCount,
  accauntStatus,
  userStatus,
}: ProfileInfoProps) {
  return (
    <View style={styles.profileInfo}>
      <Image style={styles.profileInfo_avatar} source={UserPhoto} />
      <View>
        <TextContent
          variant={EVariants.smallTitle}
          text={userName}
          style={styles.profileInfo_name}
        />
        <View style={styles.profileInfo_descWrapper}>
          <Image style={styles.profileInfo_descImg} source={Star} />
          <TextContent
            text={reviewCount.toString()}
            variant={EVariants.smallDescription}
            style={styles.profileInfo_revieCount}
          ></TextContent>
          <TextContent
            variant={EVariants.smallDescription}
            text={`${reviewCount} review`}
          />
        </View>
        <View style={styles.profileInfo_descWrapper}>
          <Image style={styles.profileInfo_descImg} source={ShieldCheck} />
          <TextContent
            text={`Account ${accauntStatus}`}
            variant={EVariants.smallDescription}
          />
        </View>
      </View>
      <TextContent
        variant={EVariants.smallDescription}
        text={userStatus}
        style={styles.profileInfo_status}
      />
    </View>
  );
}
