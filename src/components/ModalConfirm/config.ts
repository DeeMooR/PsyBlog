interface IModalConfirmData {
  title: string,
  btnApply: string,
}

export const ModalConfirmData: { [action: string]: IModalConfirmData } = {
  delete_post: {
    title: 'Удалить статью?',
    btnApply: 'Да, удалить',
  },
  delete_block: {
    title: 'Удалить блок?',
    btnApply: 'Да, удалить',
  },
  delete_user: {
    title: 'Удалить пользователя?',
    btnApply: 'Да, удалить',
  },
  update_post: {
    title: 'Изменить основные поля?',
    btnApply: 'Да, изменить',
  },
  update_block: {
    title: 'Изменить блок?',
    btnApply: 'Да, изменить',
  }
};