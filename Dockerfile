FROM nginx:alpine

WORKDIR html

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY ./build /html
