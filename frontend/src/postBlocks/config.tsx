import { BlockquoteCreate, ListCreate, TextCreate, TitleAndTextCreate, TitleCreate } from './blocksCreate';
import { IBlockquote, IList, IText, ITitle, ITitleAndText } from './interfaces';
import { Blockquote, List, Title, Text, TitleAndText } from './blocksShow';

export const showBlock: Record<string, (obj: any) => JSX.Element> = {
  'title': (obj: ITitle) => <Title obj={obj} />,
  'text': (obj: IText) => <Text obj={obj} />,
  'title_and_text': (obj: ITitleAndText) => <TitleAndText obj={obj} />,
  'quote': (obj: IBlockquote) => <Blockquote obj={obj} />,
  'list': (obj: IList) => <List obj={obj} />,
};

export const updateBlock: Record<string, (obj: any) => JSX.Element> = {
  'title': (obj: ITitle) => <TitleCreate obj={obj} />,
  'text': (obj: IText) => <TextCreate obj={obj} />,
  'title_and_text': (obj: ITitleAndText) => <TitleAndTextCreate obj={obj} />,
  'quote': (obj: IBlockquote) => <BlockquoteCreate obj={obj} />,
  'list': (obj: IList) => <ListCreate obj={obj} />,
};

export const createBlock = {
  'title': <TitleCreate />,
  'text': <TextCreate />,
  'title_and_text': <TitleAndTextCreate />,
  'quote': <BlockquoteCreate />,
  'list': <ListCreate />,
};
