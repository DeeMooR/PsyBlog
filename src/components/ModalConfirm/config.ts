interface IModalConfirmData {
  title: string,
  btnYes: string,
  btnNo: string,
}

export const ModalConfirmData: { [action: string]: IModalConfirmData } = {
  delete: {
    title: 'Удалить статью?',
    btnYes: 'Да, удалить',
    btnNo: 'Нет, оставить'
  },
  update: {
    title: 'Изменить статью?',
    btnYes: 'Да, изменить',
    btnNo: 'Нет, оставить'
  }
};