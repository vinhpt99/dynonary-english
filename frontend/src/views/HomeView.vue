<template>
  <div class="mx-auto">
    <v-row class="pt-[10vh]">
      <v-col v-for="item in FEATURE_LIST" cols="12" md="4">
        <v-card class="mx-auto flex p-2">
          <img :src="item.imgUrl" alt="" class="w-10 h-10 my-auto">
          <div>
            <v-card-title>{{ item.title }}</v-card-title>
            <v-card-text>
              {{ item.subTitle }}
            </v-card-text>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script setup lang="ts">
import ipaIcon from '@/assets/icons/ipa.png'
import communicateIcon from '@/assets/icons/communicate.png'
import flashcardIcon from '@/assets/icons/flashcard.png'
import dictionaryIcon from '@/assets/icons/dictionary.png'
import editIcon from '@/assets/icons/edit.png'
import medalIcon from '@/assets/icons/medal.png'
import gameIcon from '@/assets/icons/game.png'
import grammarIcon from '@/assets/icons/grammar.png'
import toeicIcon from '@/assets/icons/toeic.png'
import favoriteIcon from '@/assets/icons/favorite.png'
import verbIcon from '@/assets/icons/verb.png'

const FEATURE_LIST = [
  {
    title: 'Bảng phiên âm (IPA)',
    subTitle:
      'Luyện nghe, phát âm chuẩn với 44 âm trong bảng phiên âm quốc tế IPA',
    imgUrl: ipaIcon,
    //to: ROUTES.IPA,
  },
  {
    title: '1000+ câu giao tiếp',
    subTitle: 'Luyện nghe, nói câu tiếng Anh giao tiếp hàng ngày cùng Dyno',
    imgUrl: communicateIcon,
    //to: ROUTES.COMMUNICATION_PHRASE,
  },
  {
    title: 'Từ vựng với Flashcard',
    subTitle:
      'Flashcard phương pháp học từ vựng nổi tiếng. Nay hoàn toàn miễn phí trên Dynonary',
    imgUrl: flashcardIcon,
    //to: ROUTES.FLASHCARD,
  },
  {
    title: 'Từ điển trong Dynonary',
    subTitle: 'Danh sách từ vựng được phân loại theo cấp độ, loại từ, ...',
    imgUrl: dictionaryIcon,
    //to: ROUTES.DYNO_DICTIONARY,
  },
  {
    title: 'Từ vựng TOEIC',
    subTitle: 'Các từ vựng thường gặp trong đề thi Toeic',
    imgUrl: toeicIcon,
    //to: ROUTES.TOEIC_DICTIONARY,
  },
  {
    title: 'Từ vựng yêu thích của bạn',
    imgUrl: favoriteIcon,
    subTitle: 'Danh sách những từ vựng yêu thích mà bạn đã lưu',
    //to: ROUTES.FAVORITE,
  },
  {
    title: 'Động từ bất quy tắc',
    imgUrl: verbIcon,
    subTitle: 'Tất cả những động từ bất quy tắc trong tiếng Anh',
    //to: ROUTES.IRREGULAR,
  },
  {
    title: 'Ngữ pháp',
    imgUrl: grammarIcon,
    subTitle: 'Danh sách tổng hợp những cấu trúc câu trong tiếng Anh',
    //to: ROUTES.GRAMMAR,
  },
  {
    title: 'Play Games',
    imgUrl: gameIcon,
    subTitle:
      'Ôn luyện kiến thức hiệu quả và đỡ nhàm chán hơn qua việc chơi game cùng Dyno nhé',
    //to: ROUTES.GAMES.HOME,
  },
  {
    title: 'Bảng xếp hạng',
    imgUrl: medalIcon,
    subTitle: 'Cùng xem thành tích của bạn bè và những người khác nhé',
    //to: ROUTES.LEADERBOARD,
  },
  {
    title: 'Đóng góp',
    imgUrl: editIcon,
    subTitle:
      'Dyno rất mong được sự đóng góp của bạn. Bạn có thể thêm từ mới, sửa lỗi sai',
    //to: ROUTES.CONTRIBUTION,
  },
];

</script>
