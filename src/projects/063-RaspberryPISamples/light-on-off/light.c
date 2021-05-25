/*
	Simple C program that light on/off
*/

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>

void exit_failure(const char *msg)
{
	fprintf(stderr, "%s\n", msg);
	exit(EXIT_FAILURE);
}


int exportio(int iono)
{
	FILE *f;
	
	if ((f = fopen("/sys/class/gpio/export", "w")) == NULL)
		return  -1;
		
	fprintf(f, "%d", iono);
	fclose(f);
		
	return 0;
}

int makeoutput(int iono)
{
	FILE *f;
	char path[64];
	
	sprintf(path, "/sys/class/gpio/gpio%d/direction", iono);
	
	if ((f = fopen(path, "w")) == NULL)
		return  -1;
		
	fprintf(f, "out");
	fclose(f);
		
	return 0;
}


int unexportio(int iono)
{
	FILE *f;
	
	if ((f = fopen("/sys/class/gpio/unexport", "w")) == NULL)
		return  -1;
		
	fprintf(f, "%d", iono);
	fclose(f);
		
	return 0;
}

int main(int argc, char **argv)
{
	FILE *fvalue;
	int iono;
	char valuepath[64];
	char *pend;
	int i;
	
	if (argc != 2) 
		exit_failure("Wrong number of arguments\n");
	
	iono = (int)strtol(argv[1], &pend, 10);
	
	if (*pend != '\0') 
		exit_failure("Invalid io number\n");
	
	if (iono <= 0 || iono > 30)
		exit_failure("Invalid io number\n");
		
	if (exportio(iono) == -1)
		exit_failure("exportio");
		
	if (makeoutput(iono) == -1) {
		fprintf(stderr, "makeoutput\n");
		goto EXIT;		
	}
	
	sprintf(valuepath, "/sys/class/gpio/gpio%d/value", iono);
	if ((fvalue = fopen(valuepath, "w")) == NULL) {
		fprintf(stderr, "Can not open file\n");
		goto EXIT;
	}
	
	setbuf(fvalue, NULL);
	
	for (i = 0; i < 10; ++i) {
		fprintf(fvalue, "1");
		sleep(1);
		fprintf(fvalue, "0");
		sleep(1);
	}
	
	fclose(fvalue);
	
EXIT:
	if (unexportio(iono) == -1)
		exit_failure("unexportio");		
	
	return 0;
}
