export type SettingCardProps = {
   title: string
   subTitle?: string
}

export type ReactSettingCardProps = {
    children: React.ReactNode
} & SettingCardProps
