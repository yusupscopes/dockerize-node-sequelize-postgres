FROM node:14
RUN mkdir -p /opt/app
WORKDIR /opt/app
RUN adduser app
COPY pivotapp/ .
RUN npm install
RUN chown -R app:app /opt/app
USER app
EXPOSE 3000
CMD [ "npm", "run", "pm2" ]
