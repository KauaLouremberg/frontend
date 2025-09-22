## YARN ##

sudo apt update && sudo apt upgrade -y
sudo apt install curl gnupg

curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo tee /usr/share/keyrings/yarn.asc

echo "deb [signed-by=/usr/share/keyrings/yarn.asc] https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

sudo apt install yarn

## NODE JS ##

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

source ~/.bashrc

nvm install node 20

## START PROJECT ##

yarn install

yarn start









