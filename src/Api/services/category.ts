import { Service } from "typedi";
import { ICategory } from "../../interfaces/ICategory";
import categoryModel from "../models/category";

@Service()
export default class categoryService {
  public async getCategory(filterationFeilds?): Promise<ICategory[]> {
    let filters: any = {
      isDeleted: false,
    };
    if (filterationFeilds) {
     await Object.keys(filterationFeilds).forEach((key) => {
      filters[key] = filterationFeilds[key]
      })
    }

    const category: ICategory[] = await categoryModel.find(filters).sort({ createdAt: -1 });
    return category;
  }
  public async createCategory(CategoryDetails: ICategory): Promise<ICategory> {
    const category: ICategory = await categoryModel.create({
      title: CategoryDetails.title
    });
    return category;
  }
  public async deleteCategory(categoryId: string): Promise<ICategory> {
    const category: ICategory = await categoryModel.findByIdAndUpdate({ _id: categoryId }, { $set: { isDeleted: true } });
    return category;
  }
  public async patchCategory(id: string, CategoryDetails: ICategory): Promise<ICategory> {
    const category: ICategory = await categoryModel.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          title: CategoryDetails.title
        },
      }
    );
    return category;
  }



}
