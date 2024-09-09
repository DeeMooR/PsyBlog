interface IModalConfirmData {
  title: string,
  btnYes: string,
  btnNo: string,
}

export const ModalConfirmData: { [action: string]: IModalConfirmData } = {
  delete: {
    title: 'Удалить пост?',
    btnYes: 'Да, удалить',
    btnNo: 'Нет, оставить'
  },
  update: {
    title: 'Изменить пост?',
    btnYes: 'Да, изменить',
    btnNo: 'Нет, оставить'
  }
};