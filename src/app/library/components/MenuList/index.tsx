import { ReactNode } from "react";

type MenuElementProps = {
  icon: ReactNode;
  label: ReactNode;
  action?: () => void;
};

type MenuListProps = {
  menuList: MenuElementProps[];
};
const MenuElement = (props: MenuElementProps) => {
  const { icon, label, action } = props;
  return (
    <div
      className="grid grid-cols-[40%_60%] gap-2 items-center"
      onClick={action}
    >
      <div className="p-2 flex justify-center ">{icon}</div>
      <div className="p-2 flex justify-start font-medium text-2xl">{label}</div>
    </div>
  );
};
function MenuList(props: MenuListProps) {
  const { menuList } = props;
  return (
    <div>
      {menuList.map((ele: MenuElementProps, index) => {
        return (
          <div
            key={index}
            className="hover:bg-[#4A83F6] cursor-pointer py-2 rounded-2xl"
          >
            <MenuElement
              icon={ele.icon}
              label={ele.label}
              action={ele.action}
            />
          </div>
        );
      })}
    </div>
  );
}

export default MenuList;
