import { Service } from "typedi";
import { IListModelSchema } from "../interfaces";
import listModel from "../models/list";

@Service()
export default class listService {
  public async getList(userId: string): Promise<IListModelSchema[]> {
    const list: IListModelSchema[] = await listModel.find({ userId: userId, isDeleted: false }).sort({ createdAt: -1 });
    return list;
  }
  public async createList(listDetails: IListModelSchema): Promise<IListModelSchema> {
    const list: IListModelSchema = await listModel.create({
      listName: listDetails.listName,
      userId: listDetails.userId,
    });
    return list;
  }
  public async updateListMovie(
    listId: string,
    listDetails: IListModelSchema
  ): Promise<IListModelSchema> {
    const list: IListModelSchema = await listModel.findOneAndUpdate(
      { _id: listId },
      { $set: { movies: listDetails.movies }, }
    );
    return list;
  }
  public async deleteList(listId: string): Promise<IListModelSchema> {
    const list: IListModelSchema = await listModel.findByIdAndUpdate(
      { _id: listId },
      { $set: { isDeleted: true } }
    );
    return list;
  }
  public async updateListName(
    listId: string,
    listDetails: IListModelSchema
  ): Promise<IListModelSchema> {
    const list: IListModelSchema = await listModel.findByIdAndUpdate(
      { _id: listId },
      {
        $set: {
          listName: listDetails.listName,
        },
      }
    );
    return list;
  }
}
