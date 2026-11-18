import doorEntranceImg from '../assets/images/door_entrance_1794071409986.jpg';
import storybookCoverImg from '../assets/images/storybook_cover_1794071410328.jpg';
import cakeBackdropImg from '../assets/images/cake_backdrop_1794071412244.jpg';
import catBunnyArtImg from '../assets/images/cat_bunny_art_1794071410548.jpg';
import discordPfpImg from '../assets/images/discord_pfp.jpg';
import discordAwkwardChatImg from '../assets/images/discord_awkward_chat.png';
import discordCreditCardChatImg from '../assets/images/discord_credit_card_chat.png';
import mediaShot1Img from '../assets/images/media_shot_1.png';
import mediaShot2Img from '../assets/images/media_shot_2.png';

export const ASSETS = {
  doorEntrance: doorEntranceImg,
  storybookCover: storybookCoverImg,
  cakeBackdrop: cakeBackdropImg,
  catBunnyArt: catBunnyArtImg,
  discordPfp: discordPfpImg,
  discordAwkwardChat: discordAwkwardChatImg,
  discordCreditCardChat: discordCreditCardChatImg,
  mediaShot1: mediaShot1Img,
  mediaShot2: mediaShot2Img,
};

/**
 * Resolves any legacy `/src/assets/images/...` or `/custom-media/...` paths
 * (including ones cached in localStorage) to Vite-bundled asset URLs so
 * every image always loads reliably on Vercel.
 */
export function resolveAssetUrl(src?: string): string | undefined {
  if (!src) return src;
  if (src.includes('door_entrance_1794071409986.jpg')) return doorEntranceImg;
  if (src.includes('storybook_cover_1794071410328.jpg')) return storybookCoverImg;
  if (src.includes('cake_backdrop_1794071412244.jpg')) return cakeBackdropImg;
  if (src.includes('cat_bunny_art_1794071410548.jpg')) return catBunnyArtImg;
  if (src.includes('custom_bday_discord_screenshots_pfp_1')) return discordPfpImg;
  if (src.includes('custom_bday_discord_screenshots_awkward_chat_2')) return discordAwkwardChatImg;
  if (src.includes('custom_bday_discord_screenshots_credit_card_chat_3')) return discordCreditCardChatImg;
  if (src.includes('custom_bday_media_items_v2_0_shot_1_imageSrc_4')) return mediaShot1Img;
  if (src.includes('custom_bday_media_items_v2_1_shot_2_imageSrc_5')) return mediaShot2Img;
  return src;
}
