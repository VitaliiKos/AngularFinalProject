export const RegEx = {
  username: new RegExp('^[a-z][a-z\d]{1,19}$'),
  password: new RegExp(/^[^а-яА-яёЁіІїЇ\s]{2,20}$/),
  name: new RegExp('^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$'),
  description: new RegExp('^[a-zA-Zа-яА-яёЁіІїЇ]{1,120}$')
}
