interface IModalConfirmData {
  title: string,
  btnYes: string,
  btnNo: string,
}

export const ModalConfirmData: { [action: string]: IModalConfirmData } = {
  delete_post: {
    title: 'Удалить статью?',
    btnYes: 'Да, удалить',
    btnNo: 'Нет, оставить'
  },
  delete_block: {
    title: 'Удалить блок?',
    btnYes: 'Да, удалить',
    btnNo: 'Нет, оставить'
  },
  update: {
    title: 'Изменить статью?',
    btnYes: 'Да, изменить',
    btnNo: 'Нет, оставить'
  }
};