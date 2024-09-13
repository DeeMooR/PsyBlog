import { clearNewPostNewBlock, clearNewPostUpdate } from "src/store";

export const BaseBlockCreateData = {
  create: (value: string | null) => ({
    title: `Создание блока "${value}"`,
    btnApply: 'Создать',
    funcClearState: clearNewPostNewBlock(),
  }),
  update: (value: string | null) => ({
    title: `Изменение блока "${value}"`,
    btnApply: 'Изменить',
    funcClearState: clearNewPostUpdate(),
  })
}