FROM ubuntu:latest
RUN apt-get update && \
    apt-get install -y net-tools
RUN apt-get install -y iputils-ping
RUN apt-get install -y openssh-server
RUN echo 'root:password' | chpasswd
RUN echo "PermitRootLogin yes" >> /etc/ssh/sshd_config
RUN service ssh restart
