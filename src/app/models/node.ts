import {NodeContent} from './NodeContent';

export class Node {
  id: string;
  node: NodeContent;
  type: string;
  content: string;
  // postId: string;
  // status: string;
  // // createdDate: number;
  // // modificationDate: number;
  // userId: string;

  constructor(id: string = null,
              type: string = 'TEXT',
              content: string = '') {
    this.id = id;
    this.type = type;
    this.content = content;
  }

}
