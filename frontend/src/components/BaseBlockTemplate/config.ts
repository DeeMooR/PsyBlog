import { BlockNames } from "src/postBlocks/interfaces";
import { clearNewPostNewBlock, clearNewPostUpdate } from "src/store";

export const BaseBlockData = {
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

export const getBaseBlockData = (updateName: BlockNames | null, newBlockName: BlockNames | null) => {
  const blockType = updateName ? 'update' : 'create';
  const blockName = updateName ? updateName : newBlockName;
  return BaseBlockData[blockType](blockName);
}