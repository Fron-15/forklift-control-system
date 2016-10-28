FROM vpclub/node:5

MAINTAINER John Deng
ENV REFRESHED_AT 2016-09-19

ADD ./ /app
WORKDIR /app

#create a non sudo user
RUN useradd -m docker && echo "docker:docker" | chpasswd && adduser docker sudo
RUN chown -R docker:docker /usr/local/ /app 
USER docker

#assume that the user run below two commands before build the image

#RUN npm config set registry https://registry.npm.taobao.org/
#RUN npm install -g uglify-js
RUN bower install
RUN npm install --production

EXPOSE 8103

CMD ["./run.sh"]