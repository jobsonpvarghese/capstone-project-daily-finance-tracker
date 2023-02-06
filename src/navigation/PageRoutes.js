import Detail from "../screens/Detail"
import ExpenseFrom from "../components/ExpenseFrom"
import CategoryAdd from "../components/CategoryAdd"
import Category from "../screens/Category"


export const route = [
  {
    name: "Details",
    component: Detail
  },
  {
    name: "ExpenseForm",
    component: ExpenseFrom
  },
  {
    name: "CategoryAdd",
    component: CategoryAdd
  },
  {
    name: "Category",
    component: Category
  }
]
