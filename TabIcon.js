const TabIcon = ({ selected, title, icon }) => {
  const selectColor = selected ? AppColors.tabbar.iconSelected : AppColors.tabbar.iconDefault;
  return (
    <View>
      <Icon
        name={icon}
        size={26}
        color={selectColor}
      />
      <Text>{title}</Text>
    </View>
  )
};